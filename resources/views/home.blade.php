@extends('layouts.app')

@section('content')
<div class="app-container">
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-content">
            <div class="logo-container">
                <h1 class="logo">Noni's 40th Birthday</h1>
            </div>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <button class="nav-btn active" data-section="program">Program</button>
            <button class="nav-btn" data-section="photos">Upload Photos</button>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Program Section -->
        <section id="program" class="content-section active">
            <div class="timeline-container">
                <h2 class="section-title">Noni's 40th Birthday Celebration</h2>
                <div class="timeline">
                    <!-- Timeline items will be dynamically generated -->
                </div>
            </div>
        </section>

        <!-- Photos Section -->
        <section id="photos" class="content-section">
            <div class="photos-container">
                <h2 class="section-title">Photo Gallery</h2>
                <div class="upload-section">
                    <div class="upload-card">
                        <div class="upload-icon">
                            <svg viewBox="0 0 24 24" width="48" height="48">
                                <path fill="currentColor" d="M14,13V17H10V13H7L12,8L17,13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
                            </svg>
                        </div>
                        <h3>Got pictures to upload?</h3>
                        <p>Share your favorite moments from the celebration!</p>
                        <form id="uploadForm" enctype="multipart/form-data">
                            @csrf
                            <input type="file" id="fileInput" name="photos[]" multiple accept="image/*" style="display: none;">
                            <button type="button" class="upload-btn" id="uploadTrigger">Select Photos</button>
                            <button type="submit" class="submit-btn" id="submitBtn" style="display: none;">Upload Photos</button>
                        </form>
                    </div>
                </div>
                <div class="gallery" id="gallery">
                    <!-- Uploaded images will appear here -->
                </div>
            </div>
        </section>
    </main>

    <!-- Toast Notification -->
    <div class="toast" id="toast"></div>
</div>
@endsection