$(document).ready(function() {
    const maintenanceRequests = [
        { room: 'Room 2', description: 'Leaky faucet', status: 'pending', notes: '' },
        { room: 'Room 3', description: 'Air conditioner not working', status: 'completed', notes: 'Repaired on 07/25/2024' },
        { room: 'Room 4', description: 'Clogged toilet', status: 'pending', notes: '' },
        { room: 'Room 5', description: 'Light bulb needs replacement', status: 'ongoing', notes: 'Bulb ordered' },
        { room: 'Room 8', description: 'Heating system malfunction', status: 'pending', notes: '' },
        { room: 'Room 9', description: 'Door lock jammed', status: 'completed', notes: 'Fixed on 07/20/2024' },
        { room: 'Room 10', description: 'Broken window', status: 'ongoing', notes: 'Waiting for replacement glass' },
        { room: 'Room 21', description: 'Ceiling fan not working', status: 'pending', notes: '' },
        { room: 'Room 101', description: 'Water heater issue', status: 'ongoing', notes: 'Technician scheduled' },
        { room: 'Room 102', description: 'Window blinds broken', status: 'completed', notes: 'Replaced on 07/22/2024' },
        { room: 'Room 103', description: 'Carpet stain', status: 'pending', notes: '' },
        { room: 'Room 104', description: 'Power outlet not working', status: 'ongoing', notes: 'Electrician assigned' }
        // Add more 
    ];

    function renderRequests() {
        const filterRoom = $('#filterRoom').val().toLowerCase();
        const filterStatus = $('#filterStatus').val();
        const filteredRequests = maintenanceRequests.filter(request => {
            return (filterRoom === '' || request.room.toLowerCase().includes(filterRoom)) &&
                   (filterStatus === '' || request.status === filterStatus);
        });

        $('#maintenanceRequests').empty();
        filteredRequests.forEach(request => {
            $('#maintenanceRequests').append(`
                <tr>
                    <td>${request.room}</td>
                    <td>${request.description}</td>
                    <td>${request.status}</td>
                    <td>${request.notes}</td>
                    <td><button class="btn btn-sm btn-info add-note" data-room="${request.room}">Add Note</button></td>
                </tr>
            `);
        });
    }

    $('#filterRoom, #filterStatus').on('input change', renderRequests);

    $('#maintenanceRequests').on('click', '.add-note', function() {
        const room = $(this).data('room');
        const note = prompt('Enter your note:');
        if (note) {
            const request = maintenanceRequests.find(r => r.room === room);
            request.notes += note + ' ';
            renderRequests();
        }
    });

    renderRequests();
});