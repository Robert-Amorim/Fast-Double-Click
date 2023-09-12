import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import axios from 'axios';
import MainPage from '../pages/MainPage';

jest.mock('axios');

describe('Checking the "MainPage" Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Checking if page components are rendered', async () => {
    render(
      <Router>
        <MainPage />
      </Router>
    );

    expect(screen.getByText('Fast Double Click')).toBeInTheDocument();
    expect(screen.getByText('Double Click')).toBeInTheDocument();
    expect(screen.getByText('Records')).toBeInTheDocument();
  });

  test('Validating the Double Click button', async () => {

    const mockPost = jest.spyOn(axios, 'post');
    mockPost.mockResolvedValueOnce({ data: 'success' });
    
    render(
      <Router>
        <MainPage />
      </Router>
    );

    fireEvent.click(screen.getByText('Double Click'));
    expect(mockPost).not.toBeCalled();

    fireEvent.click(screen.getByText('Double Click'));
    expect(mockPost).toBeCalledTimes(1);
  });
});
