@extends('layouts.app')

@section('content')
<div class="app-container">
    <!-- Theme Toggle -->
    <div class="theme-toggle">
        <button id="themeToggle" class="theme-btn" aria-label="Toggle theme">
            <span class="sun-icon">☀️</span>
            <span class="moon-icon">🌙</span>
        </button>
    </div>

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
            <button class="nav-btn" data-section="menu">Menu</button>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Program Section -->
        <section id="program" class="content-section active">
            <div class="timeline-container">
                <h2 class="section-title">The Program</h2>
                <div class="timeline">
                    <!-- Timeline items will be dynamically generated -->
                </div>
            </div>
        </section>

        <!-- Menu Section -->
        <section id="menu" class="content-section">
            <div class="menu-container">
                <h2 class="section-title">Menu</h2>
                <div class="menu-category">
                    <h3 class="menu-category-title">Starter</h3>
                    <div class="menu-item">
                        <p class="menu-item-description">Smoked Trout Rose's, Creamy Avocado Mousse, Baby Leaf, Cucumber & Cherry Tomato Salad Dressed with Balsamic Reduction</p>
                    </div>
                </div>

                <div class="menu-category">
                    <h3 class="menu-category-title">Sorbet</h3>
                    <div class="menu-item">
                        <p class="menu-item-description">Refreshing Passionfruit Sorbet to Cleanse the Palate</p>
                    </div>
                </div>

                <div class="menu-category">
                    <h3 class="menu-category-title">Main</h3>
                    <div class="menu-item">
                        <h4 class="menu-item-title">Sumptuous Buffet Feast</h4>
                        <ul class="menu-item-list">
                            <li>Medium Rare Beef Fillet Crusted with Crushed Peppercorns</li>
                            <li>Spicy Peri Peri Marinated Chicken Leg & Thigh Pieces</li>
                            <li>Traditional & Aromatic Savoury Rice</li>
                            <li>Creamy Potato Dauphinoise, Layered to Perfection</li>
                            <li>Garlic Butter Glazed Broccoli and Crisp Green Beans</li>
                            <li>Fresh Traditional Greek Salad & Dressing</li>
                            <li>Colourful & Tangy Beetroot Puree</li>
                            <li>Rich Red Wine Jus & a Hearty Brown Gravy</li>
                        </ul>
                    </div>
                </div>

                <div class="menu-category">
                    <h3 class="menu-category-title">Dessert Table</h3>
                    <div class="menu-item">
                        <ul class="menu-item-list">
                            <li>Creamy Baked New York Cheesecake & a Trio of Dipping Sauces</li>
                            <li>Vanilla Bean Crème Brûlée, Caramelized Sugar & Finish with a Sweet Berry Mint Salsa</li>
                            <li>Floral Scented Rose Panna Cotta & Crunchy Vanilla Crumb</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Toast Notification -->
    <div class="toast" id="toast"></div>
</div>
@endsection