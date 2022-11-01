import * as yup from 'yup';

export const schema = yup.object({
  boardDescription: yup.string(),
  boardName: yup.string().required(),
});

export type Schema = yup.InferType<typeof schema>;
