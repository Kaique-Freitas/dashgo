import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile(props: ProfileProps) {
  const { showProfileData = true } = props;

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Kaique Freitas</Text>
          <Text color="gray.300" fontSize="small">
            kaiquefreitas@outlook.pt
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Kaique Freitas"
        src="https://github.com/kaique-freitas.png"
      />
    </Flex>
  );
}
