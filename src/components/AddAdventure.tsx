import { Container, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const AddAdventure = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
    },
  });
  return (
    <Container>
      <TextInput
        label="Name of Adventure"
        placeholder="Day Trip to Cannon Mountain"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
    </Container>
  );
};

export { AddAdventure };
