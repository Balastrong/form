import type { FormApi, FormTransform, Validator } from '@tanstack/form-core'

export function useTransform<
  TFormData,
  TFormValidator extends Validator<TFormData, unknown> | undefined = undefined,
>(
  fn: (formBase: FormApi<any, any>) => FormApi<TFormData, TFormValidator>,
  deps: unknown[],
): FormTransform<TFormData, TFormValidator> {
  return {
    fn,
    deps,
  }
}
