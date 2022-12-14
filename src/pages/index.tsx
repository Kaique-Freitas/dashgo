import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail"></Input>
          <Input type="password" name="password" label="Password"></Input>
          <Button type="submit" mt="6" colorScheme="blue" size="lg">
            Sign In
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
