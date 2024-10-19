import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const Pagination = () => {
  return (
    <Flex direction="row" align="center" gap="2" justify="center">
      <Button color="gray" variant="soft">
        <RxDoubleArrowLeft />
      </Button>
      <Button color="gray" variant="soft">
        <FaChevronLeft />
      </Button>{" "}
      <Text size="1"> Page 1 of 10</Text>
      <Button color="gray" variant="soft">
        <FaChevronRight />{" "}
      </Button>
      <Button color="gray" variant="soft">
        <RxDoubleArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
