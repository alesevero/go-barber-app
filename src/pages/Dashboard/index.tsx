import React from 'react';
import { Button } from 'react-native';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Button title="Logout" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
