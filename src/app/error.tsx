'use client'; // Error components must be Client components
import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className=''>
            <div className='flex content-center justify-center p-4 text-9xl text-red-600'>
                <i className='bi bi-exclamation-triangle'></i>
            </div>
            <h2 className='text-center text-red-600'>Blunder!</h2>
            <h3 className='text-center text-red-700'>{error.name}</h3>
            <h4 className='text-center text-red-800'>{error.message}</h4>
            <div className='flex content-center justify-center p-4'>
                <button
                    className='btn btn-danger'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Retry
                </button>
            </div>
        </div>
    );
}

