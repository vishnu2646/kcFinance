import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    private router = inject(Router);

    public isToggled: boolean = false;

    public isLoggedIn: boolean = false;

    constructor() {
        this.router.events.subscribe((val) => {
            if(val instanceof NavigationEnd) {
                if(val.url === "/login") {
                    this.isLoggedIn = false;
                } else {
                    this.isLoggedIn = true;
                }
            }
        })
    }

    public toggleNavbarMenu() {
        this.isToggled = !this.isToggled;
    }

    public handleLogout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}
