import { describe, expect, it } from 'vitest'
import { FieldApi, FormApi } from '@tanstack/form-core'
import * as v from 'valibot'
import { valibotValidator } from '../src/index'

describe('valibot form api', () => {
  it('should run an onChange with string validation', () => {
    const form = new FormApi({
      defaultValues: {
        name: '',
      },
      validatorAdapter: valibotValidator(),
    })

    const field = new FieldApi({
      form,
      name: 'name',
      validators: {
        onChange: v.pipe(
          v.string(),
          v.minLength(3, 'You must have a length of at least 3'),
        ),
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a')
    expect(field.getMeta().errors).toEqual([
      'You must have a length of at least 3',
    ])
    field.setValue('asdf')
    expect(field.getMeta().errors).toEqual([])
  })

  it('should run an onChange fn with valibot validation option enabled', () => {
    const form = new FormApi({
      defaultValues: {
        name: '',
      },
      validatorAdapter: valibotValidator(),
    })

    const field = new FieldApi({
      form,
      name: 'name',
      validators: {
        onChange: ({ value }) => (value === 'a' ? 'Test' : undefined),
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a')
    expect(field.getMeta().errors).toEqual(['Test'])
    field.setValue('asdf')
    expect(field.getMeta().errors).toEqual([])
  })
})
