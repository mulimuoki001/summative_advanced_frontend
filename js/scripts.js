// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [150, 120, 100, 80, 50],
      name: 'Rooms',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#188038', '#078ECE', '#054D6F', '#0B3119', '#3C44B3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#000000',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Single', 'Double', 'Suite', 'Studio', 'Apartment'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Number of Rooms',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'New Requests',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Completed Requests',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#188038', '#078ECE'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#000000',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'New Requests',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Completed Requests',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();


  function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'inline-block';
      searchBar.focus();
    } else {
      searchBar.style.display = 'none';
    }
  }

  function searchContent() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      let cardText = card.innerText.toLowerCase();
      if (cardText.includes(input)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function toggleProfile() {
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileDropdown.style.display === 'none' || profileDropdown.style.display === '') {
      profileDropdown.style.display = 'block';
    } else {
      profileDropdown.style.display = 'none';
    }
  }

  function toggleNotifications() {
    const notificationDropdown = document.getElementById('notification-dropdown');
    if (notificationDropdown.style.display === 'none' || notificationDropdown.style.display === '') {
      notificationDropdown.style.display = 'block';
    } else {
      notificationDropdown.style.display = 'none';
    }
  }

  // Example function to simulate sending a notification
  function sendNotification(name, title, details) {
    const notificationDropdown = document.getElementById('notification-dropdown');
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.innerHTML = `
      <p class="notification-title">${title}</p>
      <p class="notification-details">${name}: ${details}</p>
    `;
    notificationDropdown.appendChild(newNotification);
  }





    const events = [
    { id: 1, title: 'Event Title 1', date: 'August 15, 2024', description: 'Details about Event 1', location: 'Location 1' },
    { id: 2, title: 'Event Title 2', date: 'August 22, 2024', description: 'Details about Event 2', location: 'Location 2' }
  ];

  function renderEvents() {
    const eventsTableBody = document.getElementById('events-table-body');
    eventsTableBody.innerHTML = ''; // Clear any existing content

    events.forEach(event => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${event.title}</td>
        <td>${event.date}</td>
        <td>${event.description}</td>
        <td>${event.location}</td>
        <td>
          <button onclick="viewEvent(${event.id})">View</button>
          <button onclick="updateEvent(${event.id})">Update</button>
          <button onclick="deleteEvent(${event.id})">Delete</button>
        </td>
      `;
      eventsTableBody.appendChild(row);
    });
  }

  function viewEvent(id) {
    // Implement view event functionality
    alert('Viewing event with ID: ' + id);
  }

  function updateEvent(id) {
    // Implement update event functionality
    alert('Updating event with ID: ' + id);
  }

  function deleteEvent(id) {
    // Implement delete event functionality
    if (confirm('Are you sure you want to delete this event?')) {
      const index = events.findIndex(event => event.id === id);
      if (index > -1) {
        events.splice(index, 1); // Remove event from array
        renderEvents(); // Re-render events list
      }
    }
  }

  // Initial render
  renderEvents();
  let editIndex = -1; // Track which event is being edited

// Show the event form
function showEventForm() {
    document.getElementById('event-form-container').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Add New Event';
    document.getElementById('event-form').reset();
    editIndex = -1; // Reset edit index
    hideEventDetails(); // Hide event details when showing form
}

// Hide the event form
function hideEventForm() {
    document.getElementById('event-form-container').classList.add('hidden');
}

// Show event details
function showEventDetails(row) {
    const cells = row.cells;
    document.getElementById('event-detail-title').textContent = cells[0].textContent;
    document.getElementById('event-detail-date').textContent = cells[1].textContent;
    document.getElementById('event-detail-description').textContent = cells[2].textContent;
    document.getElementById('event-detail-location').textContent = cells[3].textContent;
    document.getElementById('event-details-container').classList.remove('hidden');
}

// Hide event details
function hideEventDetails() {
    document.getElementById('event-details-container').classList.add('hidden');
}

// Add or update event
function addEvent(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const description = document.getElementById('event-description').value;
    const location = document.getElementById('event-location').value;

    const tbody = document.getElementById('event-table-body');
    if (editIndex === -1) {
        // Add new event
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${date}</td>
            <td>${description}</td>
            <td>${location}</td>
            <td>
                <button onclick="editEvent(this)">Edit</button>
                <button onclick="deleteRow(this)">X</button>
                <button onclick="showEventDetails(this.parentElement.parentElement)">View</button>
            </td>
        `;
        tbody.appendChild(newRow);
    } else {
        // Update existing event
        const row = tbody.rows[editIndex];
        row.cells[0].textContent = title;
        row.cells[1].textContent = date;
        row.cells[2].textContent = description;
        row.cells[3].textContent = location;
        editIndex = -1;
    }

    document.getElementById('event-form').reset();
    hideEventForm();
}

// Edit event
function editEvent(button) {
    const row = button.parentElement.parentElement;
    const cells = row.cells;
    document.getElementById('event-title').value = cells[0].textContent;
    document.getElementById('event-date').value = cells[1].textContent;
    document.getElementById('event-description').value = cells[2].textContent;
    document.getElementById('event-location').value = cells[3].textContent;

    document.getElementById('form-title').textContent = 'Edit Event';
    document.getElementById('event-form').scrollIntoView();

    editIndex = row.rowIndex - 1;
    showEventForm();
}

// Delete event row
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
    hideEventDetails(); // Hide event details when row is deleted
}

document.getElementById('event-form').addEventListener('submit', addEvent);

  // Theme switcher

const profilePictureInput = document.getElementById('profilePicture');
const profileImage = document.getElementById('profileImage');

profilePictureInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        profileImage.src = e.target.result;
    }

    reader.readAsDataURL(file);
});




let editingRow = null;

    function toggleReportForm() {
      const formContainer = document.getElementById('report-form-container');
      formContainer.classList.toggle('hidden');
    }

    document.getElementById('add-report-btn').addEventListener('click', function () {
      editingRow = null;
      document.getElementById('report-form').reset();
      document.getElementById('form-title').textContent = 'Add New Report';
      toggleReportForm();
    });

    document.getElementById('report-form').addEventListener('submit', function (event) {
      event.preventDefault();

      // Get form values
      const date = document.getElementById('report-date').value;
      const type = document.getElementById('report-type').value;
      const description = document.getElementById('report-description').value;
      const status = document.getElementById('report-status').value;

      if (editingRow) {
        // Update existing row
        editingRow.children[1].textContent = date;
        editingRow.children[2].textContent = type;
        editingRow.children[3].textContent = description;
        editingRow.children[4].textContent = status;
      } else {
        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                    <td>${Date.now()}</td>
                    <td>${date}</td>
                    <td>${type}</td>
                    <td>${description}</td>
                    <td>${status}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;

        // Add new row to the table body
        document.getElementById('reports-table-body').appendChild(newRow);
      }

      // Update summary counts
      updateSummaryCounts();

      // Hide the form
      toggleReportForm();

      // Clear the form
      document.getElementById('report-form').reset();
      editingRow = null;
    });

    // Update summary counts
    function updateSummaryCounts() {
      const totalReports = document.getElementById('reports-table-body').children.length;
      document.getElementById('total-reports').textContent = totalReports;

      const reportsThisMonth = Array.from(document.getElementById('reports-table-body').children).filter(row => {
        const reportDate = new Date(row.children[1].textContent);
        const today = new Date();
        return reportDate.getMonth() === today.getMonth() && reportDate.getFullYear() === today.getFullYear();
      }).length;
      document.getElementById('reports-this-month').textContent = reportsThisMonth;

      const pendingReports = Array.from(document.getElementById('reports-table-body').children).filter(row => {
        return row.children[4].textContent === 'Pending';
      }).length;
      document.getElementById('pending-reports').textContent = pendingReports;
    }

    // Event delegation for Edit and Delete buttons
    document.getElementById('reports-table-body').addEventListener('click', function (event) {
      if (event.target.classList.contains('edit-btn')) {
        // Edit button clicked
        const row = event.target.closest('tr');
        const date = row.children[1].textContent;
        const type = row.children[2].textContent;
        const description = row.children[3].textContent;
        const status = row.children[4].textContent;

        // Populate the form with existing row data
        document.getElementById('report-id').value = row.children[0].textContent;
        document.getElementById('report-date').value = date;
        document.getElementById('report-type').value = type;
        document.getElementById('report-description').value = description;
        document.getElementById('report-status').value = status;

        editingRow = row;
        document.getElementById('form-title').textContent = 'Edit Report';
        toggleReportForm();
      } else if (event.target.classList.contains('delete-btn')) {
        // Delete button clicked
        if (confirm('Are you sure you want to delete this report?')) {
          const row = event.target.closest('tr');
          row.remove();
          updateSummaryCounts();
        }
      }
    });





