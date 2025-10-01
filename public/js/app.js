// Timeline data
const timelineData = [
    {
        time: "3:00 – 3:30 PM",
        title: "Guest Arrival & Welcome",
        details: ["Guests arrive, greeted with welcome drinks.", "Light ambient music sets the tone."]
    },
    {
        time: "3:30 – 5:30 PM",
        title: "Canapes",
        details: ["Saxophonist live set during canapés and mingling."]
    },
    {
        time: "5:30 – 6:00 PM",
        title: "Transition to Main Event",
        details: [
            "Guests move into the main dining area.",
            "DJ continues with soft background music.",
            "Emcee opens the main event with a short poetic piece to set the tone."
        ]
    },
    {
        time: "6:00 – 6:20 PM",
        title: "Welcome Remarks & Prayer",
        details: ["Led by Lebo (Emcee)."]
    },
    {
        time: "6:20 – 6:30 PM",
        title: "Singer Performance",
        details: ["To officially kick off the evening - Gaale"]
    },
    {
        time: "6:30 – 7:00 PM",
        title: "Starters Served",
        details: ["DJ plays elegant background music."]
    },
    {
        time: "7:00 – 7:30 PM",
        title: "First Round of Speeches",
        details: [
            "Naledi & Tapiwa – Daughter and Son",
            "Ayanda Magutshwa – Sister",
            "Philani Melato – Cousin",
            "Shaun Melato - Cousin"
        ]
    },
    {
        time: "7:30 – 8:15 PM",
        title: "Palate Cleanser and Mains Served",
        details: ["Singer & saxophonist perform interchangeably"]
    },
    {
        time: "8:15 – 8:30 PM",
        title: "Second Round of Speeches",
        details: [
            "Ayanda Magadla – Friend",
            "Carmen Du Plessis - Friend",
            "Noma Themba – Friend"
        ]
    },
    {
        time: "8:30 – 8:40 PM",
        title: "Speech and Toast by Husband",
        details: ["Martin Chitura"]
    },
    {
        time: "8:40 – 8:50 PM",
        title: "Host Thank You, Cake Cutting & Candle Blowing",
        details: [
            "Cold sparks",
            "Singer leads Happy Birthday",
            "Saxophonist adds live accents"
        ]
    },
    {
        time: "8:55",
        title: "Dessert Served",
        details: ["Singer"]
    },
    {
        time: "9:00 PM onwards",
        title: "Party & Dancing",
        details: [
            "DJ takes over",
            "Saxophonist joins in live on select tracks.",
            "Singer returns for a spotlight performance later in the evening."
        ]
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const timeline = document.querySelector('.timeline');
const uploadTrigger = document.getElementById('uploadTrigger');
const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');
const submitBtn = document.getElementById('submitBtn');
const gallery = document.getElementById('gallery');
const toast = document.getElementById('toast');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate timeline
    populateTimeline();
    
    // Set up event listeners
    setupEventListeners();
});

// Populate timeline with data
function populateTimeline() {
    timeline.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const timeElement = document.createElement('div');
        timeElement.className = 'time';
        timeElement.textContent = item.time;
        
        const titleElement = document.createElement('h3');
        titleElement.className = 'event-title';
        titleElement.textContent = item.title;
        
        const detailsElement = document.createElement('div');
        detailsElement.className = 'event-details';
        
        if (item.details.length > 1) {
            const list = document.createElement('ul');
            item.details.forEach(detail => {
                const listItem = document.createElement('li');
                listItem.textContent = detail;
                list.appendChild(listItem);
            });
            detailsElement.appendChild(list);
        } else {
            detailsElement.textContent = item.details[0];
        }
        
        timelineItem.appendChild(timeElement);
        timelineItem.appendChild(titleElement);
        timelineItem.appendChild(detailsElement);
        
        // Add staggered animation delay
        timelineItem.style.animationDelay = `${index * 0.1}s`;
        
        timeline.appendChild(timelineItem);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Navigation button clicks
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active states
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            contentSections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Upload trigger
    uploadTrigger.addEventListener('click', function() {
        fileInput.click();
    });
    
    // File input change
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            submitBtn.style.display = 'inline-block';
            showToast(`Selected ${this.files.length} file(s)`);
        } else {
            submitBtn.style.display = 'none';
        }
    });
    
    // Form submission
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (fileInput.files.length === 0) {
            showToast('Please select at least one photo', 'error');
            return;
        }
        
        // In a real implementation, you would send the files to the server here
        // For this demo, we'll simulate the upload process
        
        showToast('Uploading photos...', 'info');
        
        // Simulate upload delay
        setTimeout(() => {
            // Display uploaded images
            Array.from(fileInput.files).forEach(file => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const galleryItem = document.createElement('div');
                        galleryItem.className = 'gallery-item';
                        
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = 'Uploaded photo';
                        
                        galleryItem.appendChild(img);
                        gallery.appendChild(galleryItem);
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            showToast('Photos uploaded successfully!', 'success');
            
            // Reset form
            uploadForm.reset();
            submitBtn.style.display = 'none';
        }, 2000);
    });
}

// Show toast notification
function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = 'toast';
    
    // Add type-specific styling
    if (type === 'error') {
        toast.style.background = '#ff6b6b';
    } else if (type === 'success') {
        toast.style.background = '#51cf66';
    } else {
        toast.style.background = 'var(--gold)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is not visible, could pause animations if needed
    } else {
        // Page is visible again
    }
});