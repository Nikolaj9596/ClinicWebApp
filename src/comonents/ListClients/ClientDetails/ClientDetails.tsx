import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientDetailsPropsType, ClientType } from '../../../state/client.type';

// Предполагается, что у вас есть определенный сервис для получения данных о клиенте
// import { fetchClientDetails } from './clientService';

export const ClientDetails: React.FC<ClientDetailsPropsType> = (props) => {
  const { id } = useParams<{ id: string }>(); // используйте useParams для получения id из URL
  const [client, setClient] = useState<ClientType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для загрузки данных о клиенте
    const loadClientDetails = async () => {
      // Передаем id, приведенное к числу, в функцию для получения деталей клиента
      try {
        setLoading(true);
        const data = props.getClientById(Number(id));
        setClient(data);
        setLoading(false);
      } catch (e) {
        setError('Ошибка при загрузке данных о клиенте');
        setLoading(false);
      }
    };

    if (id) {
      loadClientDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!client) {
    return <p>Клиент не найден</p>;
  }

  // Отображение информации о клиенте
  return (
    <div>
      <h1>Детали клиента</h1>
      <p>ID: {client.id}</p>
      <p>Имя: {client.firstName}</p>
      <p>Фамилия: {client.lastName}</p>
      <p>Отчество: {client.middleName}</p>
      <p>Дата рождения: {client.dateBirthday}</p> {/* Строку можно отформатировать для красивого отображения даты */}
      <p>Адрес: {client.address}</p>
    </div>
  );
};

export default ClientDetails;
