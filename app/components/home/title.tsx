import { Title, Text } from "@mantine/core";

export function Home_Title() {
  return (
    <Title align="center" mt="xl">
      Hello! 👋 I am{" "}
      <Text
        component="span"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      >
        James Alvin Pendon
      </Text>{" "}
      aka (
      <Text
        component="span"
        variant="gradient"
        gradient={{ from: "orange", to: "red", deg: 45 }}
      >
        Johnsiras
      </Text>
      )
    </Title>
  );
}
