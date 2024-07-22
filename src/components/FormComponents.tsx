import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import DateValidation from '../validator/DateValidation';
import axios from 'axios';

type IFormType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const FormComponents = () => {
    const {
        formState: { errors, isValid },
        register,
        handleSubmit
    } = useForm<IFormType>({
        mode: 'all',
        resolver: joiResolver(DateValidation)
    });

    const onSubmitForm = async (data: IFormType) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            console.log('Post sent successfully:', response.data);
            alert('Post sent successfully!');
        } catch (error) {
            console.error('Error sending post:', error);
            alert('Error sending post');
        }
    };

    return (
        <div>
            {errors && (
                <div>
                    {errors.userId?.message} <br />
                    {errors.id?.message} <br />
                    {errors.title?.message} <br />
                    {errors.body?.message} <br />
                    {isValid + ''}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input type="number" {...register('userId')} placeholder="User ID" />
                <input type="number" {...register('id')} placeholder="ID" />
                <input type="text" {...register('title')} placeholder="Title" />
                <input type="text" {...register('body')} placeholder="Body" />
                <button type="submit" disabled={!isValid}>Send</button>
            </form>
        </div>
    );
};

export default FormComponents;
