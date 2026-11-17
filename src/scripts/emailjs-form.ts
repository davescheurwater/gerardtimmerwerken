import emailjs from '@emailjs/browser';

const isPlaceholder = (value: string) => !value || value.startsWith('your-');

const setStatus = (
	statusElement: HTMLElement | null,
	message: string,
	state: 'loading' | 'success' | 'error'
) => {
	if (!statusElement) {
		return;
	}

	statusElement.textContent = message;
	statusElement.dataset.state = state;
};

const resetButton = (button: HTMLButtonElement | null, originalLabel: string | undefined) => {
	if (!button) {
		return;
	}

	button.disabled = false;
	if (originalLabel) {
		button.textContent = originalLabel;
	}
};

const formatEmailJsError = (error: unknown) => {
	if (!error || typeof error !== 'object') {
		return '';
	}

	const details = error as { status?: number; text?: string; message?: string };
	const text = details.text || details.message || '';

	if (details.status && text) {
		return `${details.status}: ${text}`;
	}

	if (details.status) {
		return `${details.status}`;
	}

	return text;
};

const initEmailJsForm = (form: HTMLFormElement) => {
	const serviceId = form.dataset.emailjsServiceId ?? '';
	const templateId = form.dataset.emailjsTemplateId ?? '';
	const publicKey = form.dataset.emailjsPublicKey ?? '';
	const successRedirect = form.dataset.emailjsSuccessRedirect ?? '/bedankt';
	const statusElement = form.querySelector<HTMLElement>('[data-form-status]');
	const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
	const originalLabel = submitButton?.textContent?.trim();

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		if ([serviceId, templateId, publicKey].some(isPlaceholder)) {
			setStatus(
				statusElement,
				'Het formulier is nog niet volledig ingesteld. Voeg nog de EmailJS public key en template-ID toe.',
				'error'
			);
			return;
		}

		if (submitButton) {
			submitButton.disabled = true;
			submitButton.textContent = 'Bezig met verzenden...';
		}

		setStatus(statusElement, 'Bericht wordt verzonden...', 'loading');

		try {
			await emailjs.sendForm(serviceId, templateId, form, { publicKey });
			form.reset();
			setStatus(statusElement, 'Bericht verzonden. Je wordt doorgestuurd...', 'success');
			window.setTimeout(() => {
				window.location.assign(successRedirect);
			}, 600);
		} catch (error) {
			console.error('EmailJS submit failed', error);
			const errorDetails = formatEmailJsError(error);
			resetButton(submitButton, originalLabel);
			setStatus(
				statusElement,
				errorDetails
					? `Versturen is niet gelukt (${errorDetails}).`
					: 'Versturen is niet gelukt. Probeer het later opnieuw of neem direct contact op.',
				'error'
			);
			return;
		}

		resetButton(submitButton, originalLabel);
	});
};

document.querySelectorAll<HTMLFormElement>('[data-emailjs-form]').forEach(initEmailJsForm);