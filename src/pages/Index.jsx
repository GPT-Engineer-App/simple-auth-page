import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Here you would handle the login logic, possibly sending a request to a server
    console.log("Login with:", email, password);

    // Displaying a toast for demonstration
    toast({
      title: "Login Attempted",
      description: `Logged in with email: ${email}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} justify="center" align="center" height="100vh">
      <Heading>Login</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder="Enter your password" />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaSignInAlt />}>
              Sign in
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default Index;
