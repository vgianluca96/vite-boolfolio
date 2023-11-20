<script>

export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Boolfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/projects" class="nav-link">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style></style>