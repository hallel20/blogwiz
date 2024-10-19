import { Box, Flex, Table } from "@radix-ui/themes";
import React from "react";

const AdminPostList = () => {
  return (
    <Box className="col-md-8">
      <Flex justify="between">
        {" "}
        <Table.Header>
          <Table.RowHeaderCell>Post Name</Table.RowHeaderCell>
          <Table.RowHeaderCell>Post Excerpt</Table.RowHeaderCell>
          <Table.RowHeaderCell>Comments</Table.RowHeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Cell>Sample Post</Table.Cell>
        </Table.Body>
      </Flex>
    </Box>
  );
};

export default AdminPostList;
