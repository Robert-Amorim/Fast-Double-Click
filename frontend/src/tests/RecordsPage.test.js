import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter as Router } from 'react-router-dom';
import axios from 'axios';
import RecordsPage from '../pages/RecordsPage';
import { records } from '../utils/records';

jest.mock('axios');

describe('Testing ListRecords component', () => {
  test('renders filters and list records', async () => {
    axios.get.mockResolvedValueOnce({ data: records });

    render(
      <Router>
        <RecordsPage />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('List of Records')).toBeInTheDocument();
    expect(screen.getByLabelText('Start Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('End Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Order By:')).toBeInTheDocument();
    expect(screen.getByLabelText('Order:')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(await screen.findByText("Time: 1.00s - Date and Time: 12/09/2023 13:31:36")).toBeInTheDocument();
    expect(await screen.findByText("Time: 2.00s - Date and Time: 13/09/2023 13:31:36")).toBeInTheDocument();
    expect(await screen.findByText("Time: 3.00s - Date and Time: 14/09/2023 13:31:36")).toBeInTheDocument();
  });

  test('clicking on the "Apply Filters" button filters and sorts the records', async () => {
    axios.get.mockResolvedValueOnce({ data: records });

    render(
      <Router>
        <RecordsPage />
      </Router>
    );

    const startDateInput = screen.getByLabelText('Start Date:');
    const endDateInput = screen.getByLabelText('End Date:');
    const orderByInput = screen.getByLabelText('Order By:');
    const orderInput = screen.getByLabelText('Order:');
    const applyFiltersButton = screen.getByText('Filter');

    fireEvent.change(startDateInput, { target: { value: '2023-09-12' } });
    fireEvent.change(endDateInput, { target: { value: '2023-09-12' } });
    fireEvent.change(orderByInput, { target: { value: 'time' } });
    fireEvent.change(orderInput, { target: { value: 'descremento' } });
    fireEvent.click(applyFiltersButton);

    expect(await screen.findByText('Time: 1.00s - Date and Time: 12/09/2023 13:31:36')).toBeInTheDocument();
    expect(await screen.findByText('Time: 2.00s - Date and Time: 13/09/2023 13:31:36')).toBeInTheDocument();
    expect(await screen.findByText('Time: 3.00s - Date and Time: 14/09/2023 13:31:36')).toBeInTheDocument();
  });
});
