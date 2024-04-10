import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClientDetailsPropsType, ClientType } from '../../../state/client.type';
import "./ClientDetails.css"

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
    return <div className="client-details-container"><p>Загрузка...</p></div>;
  }

  if (error) {
    return <div className="client-details-container"><p>Ошибка: {error}</p></div>;
  }

  if (!client) {
    return <div className="client-details-container"><p>Клиент не найден</p></div>;
  }

  return (
    <div className="client-details-container">
      <div className="client-details-header">
        <h1>Информация о посетителе</h1>
      </div>
      <div className="client-details">
        <span className="client-details-label">ID:</span>
        <span className="client-details-value">{client.id}</span>
      </div>
      <div className="client-details">
        <span className="client-details-label">Имя:</span>
        <span className="client-details-value">{client.firstName}</span>
      </div>
      <div className="client-details">
        <span className="client-details-label">Фамилия:</span>
        <span className="client-details-value">{client.lastName}</span>
      </div>
      <div className="client-details">
        <span className="client-details-label">Отчество:</span>
        <span className="client-details-value">{client.middleName}</span>
      </div>
      <div className="client-details">
        <span className="client-details-label">Дата рождения:</span>
        <span className="client-details-value">{client.dateBirthday}</span>
      </div>
      <div className="client-details">
        <span className="client-details-label">Адрес:</span>
        <span className="client-details-value">{client.address}</span>
      </div>
    </div>
  );
};

export default ClientDetails;
