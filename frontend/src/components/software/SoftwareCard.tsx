import {
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import type { Software } from "./SoftwareTypes";

type SoftwareCardProps = {
  software: Software;
};

export default function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{software.display_name}</Heading>

          <Text py="2">{software.description}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Learn more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
