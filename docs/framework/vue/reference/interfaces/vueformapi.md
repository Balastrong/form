---
id: VueFormApi
title: VueFormApi
---

# Interface: VueFormApi\<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer\>

Defined in: [packages/vue-form/src/useForm.tsx:115](https://github.com/TanStack/form/blob/main/packages/vue-form/src/useForm.tsx#L115)

## Type Parameters

• **TParentData**

• **TFormOnMount** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnChange** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnChangeAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnBlur** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnBlurAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnSubmit** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnSubmitAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnServer** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

## Properties

### Field

```ts
Field: FieldComponent<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer>;
```

Defined in: [packages/vue-form/src/useForm.tsx:126](https://github.com/TanStack/form/blob/main/packages/vue-form/src/useForm.tsx#L126)

***

### Subscribe

```ts
Subscribe: SubscribeComponent<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer>;
```

Defined in: [packages/vue-form/src/useForm.tsx:179](https://github.com/TanStack/form/blob/main/packages/vue-form/src/useForm.tsx#L179)

***

### useField

```ts
useField: UseField<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer>;
```

Defined in: [packages/vue-form/src/useForm.tsx:137](https://github.com/TanStack/form/blob/main/packages/vue-form/src/useForm.tsx#L137)

***

### useStore()

```ts
useStore: <TSelected>(selector?) => Readonly<Ref<TSelected, TSelected>>;
```

Defined in: [packages/vue-form/src/useForm.tsx:148](https://github.com/TanStack/form/blob/main/packages/vue-form/src/useForm.tsx#L148)

#### Type Parameters

• **TSelected** = `FormState`\<`TParentData`, `TFormOnMount`, `TFormOnChange`, `TFormOnChangeAsync`, `TFormOnBlur`, `TFormOnBlurAsync`, `TFormOnSubmit`, `TFormOnSubmitAsync`, `TFormOnServer`\>

#### Parameters

##### selector?

(`state`) => `TSelected`

#### Returns

`Readonly`\<`Ref`\<`TSelected`, `TSelected`\>\>
