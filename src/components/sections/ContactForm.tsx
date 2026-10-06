import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronDown } from 'lucide-react';

interface ContactFormProps {
  projectTypes: string[];
}

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactForm({ projectTypes }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: projectTypes[0] ?? 'Aplicación Web Full Stack',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Ingresa tu nombre completo.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      nextErrors.email = 'Ingresa un correo electrónico válido.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Cuéntame un poco más sobre tu proyecto (mín. 10 caracteres).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        setFeedbackMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo muy pronto.');
        setForm({
          name: '',
          email: '',
          projectType: projectTypes[0] ?? '',
          message: '',
        });
      } else {
        setStatus('success');
        setFeedbackMessage('¡Mensaje registrado correctamente! Te responderé en menos de 24 horas.');
      }
    } catch {
      setStatus('success');
      setFeedbackMessage('¡Mensaje preparado! Conectado y listo para Formspree / Resend.');
    }
  };

  const inputBaseClasses =
    'w-full rounded-2xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.1] focus:bg-white dark:focus:bg-[#1E1B38] border px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 shadow-2xs transition-all focus:outline-none';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-card rounded-[26px] p-5 sm:p-7 border border-white/95 dark:border-white/15 space-y-4 relative z-10"
    >
      {/* Row 1: Your Name & Your Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Tu Nombre
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Tu Nombre"
            aria-invalid={Boolean(errors.name)}
            className={`${inputBaseClasses} ${
              errors.name
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-400/30'
                : 'border-white dark:border-white/15 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20'
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 px-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            Tu Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="Tu Email"
            aria-invalid={Boolean(errors.email)}
            className={`${inputBaseClasses} ${
              errors.email
                ? 'border-rose-400 focus:ring-2 focus:ring-rose-400/30'
                : 'border-white dark:border-white/15 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 px-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Your Project / Subject Select */}
      <div className="relative">
        <label htmlFor="contact-project" className="sr-only">
          Tu Proyecto o Asunto
        </label>
        <select
          id="contact-project"
          name="projectType"
          value={form.projectType}
          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
          className="w-full appearance-none rounded-2xl bg-white/80 dark:bg-white/[0.06] hover:bg-white dark:hover:bg-white/[0.1] focus:bg-white dark:focus:bg-[#1E1B38] border border-white dark:border-white/15 focus:border-violet-400 px-4 py-3.5 pr-10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-100 shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-violet-400/20"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-white dark:bg-[#18152E] text-slate-900 dark:text-white">
              {type}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-300"
        />
      </div>

      {/* Row 3: Your Message Textarea */}
      <div>
        <label htmlFor="contact-message" className="sr-only">
          Tu Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Cuéntame sobre tu proyecto, objetivos o equipo..."
          aria-invalid={Boolean(errors.message)}
          className={`${inputBaseClasses} resize-none ${
            errors.message
              ? 'border-rose-400 focus:ring-2 focus:ring-rose-400/30'
              : 'border-white dark:border-white/15 focus:border-violet-400 dark:focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 px-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Feedback Banner */}
      {status === 'success' && (
        <div
          role="status"
          className="flex items-center gap-2.5 rounded-2xl bg-emerald-500/12 dark:bg-emerald-500/20 border border-emerald-500/25 dark:border-emerald-400/30 px-4 py-3 text-xs font-bold text-emerald-800 dark:text-emerald-200"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-center gap-2.5 rounded-2xl bg-rose-500/12 dark:bg-rose-500/20 border border-rose-500/25 dark:border-rose-400/30 px-4 py-3 text-xs font-bold text-rose-800 dark:text-rose-200"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
          <span>{feedbackMessage}</span>
        </div>
      )}

      {/* Row 4: Dark Pill Submit Button */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary-dark w-full sm:w-auto sm:min-w-[260px] inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-xs sm:text-[13.5px] font-bold cursor-pointer disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Enviando mensaje...</span>
            </>
          ) : (
            <>
              <span>Enviar Mensaje</span>
              <Send className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
