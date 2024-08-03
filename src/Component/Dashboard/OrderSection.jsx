import React from 'react'
import { Box, Flex, Text, HStack, Avatar, Tag, TagLabel } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const recentOrders = [
  { name: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://bit.ly/dan-abramov' },
  { name: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered', avatar: 'https://bit.ly/kent-c-dodds' },
  { name: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled', avatar: 'https://bit.ly/ryan-florence' },
  { name: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', avatar: 'https://bit.ly/prosper-baba' },
  { name: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'https://bit.ly/code-beast' },
  { name: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'https://bit.ly/sage-adebayo' },
];

const feedbacks = [
  { name: 'Jenny Wilson', rating: 5, feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', avatar: 'https://bit.ly/dan-abramov' },
  { name: 'Dianne Russell', rating: 5, feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', avatar: 'https://bit.ly/kent-c-dodds' },
  { name: 'Devon Lane', rating: 4, feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and they don’t skip on the sauce.', avatar: 'https://bit.ly/ryan-florence' },
];

const OrderSection = () => {
  return (
    <Flex>
      <Box bg="gray.900" p={4} boxShadow="lg" width={'60%'}>
        <Text fontSize="xl" color="white" mb={4}>Recent Orders</Text>
        {recentOrders.map((order, index) => (
          <Flex key={index} alignItems="center" justifyContent="space-between" p={2} mb={2.5} bg="gray.900" borderRadius="md" borderBottom={'1px solid white'}>
            <HStack>
              <Avatar name={order.name} src={order.avatar} size="sm" />
              <Text color="white">{order.name}</Text>
            </HStack>
            <Text color="white">{order.orderNo}</Text>
            <Text color="white">{order.amount}</Text>
            <Tag size="sm" colorScheme={order.status === 'Delivered' ? 'green' : order.status === 'Pending' ? 'orange' : 'red'}>
              <TagLabel>{order.status}</TagLabel>
            </Tag>
          </Flex>
        ))}
      </Box>

      <Box flex="1" bg="gray.900" p={4} boxShadow="lg" width={'40%'}>
        <Text fontSize="xl" color="white" mb={4}>Customer's Feedback</Text>
        {feedbacks.map((feedback, index) => (
          <Box key={index} p={4} bg="gray.700" borderBottom={'1px solid white'}>
            <HStack mb={2}>
              <Avatar name={feedback.name} src={feedback.avatar} size="xs" />
              <Text fontSize={'12px'} color="white">{feedback.name}</Text>
            </HStack>
            <HStack>
                {Array(5).fill('').map((_, i) => (
                  <StarIcon w={3} h={3} key={i} color={i < feedback.rating ? 'yellow.400' : 'gray.600'} />
                ))}
              </HStack>
            <Text color="white" fontSize="10px">{feedback.feedback}</Text>
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

export default OrderSection