import React from 'react';

export default function updateTime() {
    return {
        type: 'UPDATE_TIME',
        payload: new Date().toLocaleTimeString()
    }
}