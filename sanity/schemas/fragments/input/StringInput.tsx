import { Stack, Text } from '@sanity/ui';
import { ComponentType } from 'react';
import { StringInputProps, StringSchemaType } from 'sanity';

const StringInput: ComponentType<StringInputProps<StringSchemaType>> = (props) => (
  <Stack space={3}>
    {props.renderDefault(props)}
    <Text size={1}>Characters: {props.value?.length ?? 0}</Text>
  </Stack>
);

export default StringInput;
