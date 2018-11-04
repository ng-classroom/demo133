import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router, Routes} from "@angular/router";

import {DashboardComponent} from './dashboard/dashboard.component';
import {View1Component} from './view1/view1.component';
import {AppComponent} from './app.component';

describe('Router:app', () => {
  let location: Location;
  let router: Router;
  let fixture;

  const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'view/:id',      component: View1Component },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [    RouterTestingModule.withRoutes(routes)],
      declarations: [
        DashboardComponent,
        View1Component,
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "dashboard" redirects you to /dashboard', fakeAsync(() => {
    router.navigate(['/dashboard']);
    tick(50);
    expect(location.path()).toBe('/dashboard');
  }));

  it('navigate to "view/1" redirects you to /view/1', fakeAsync(() => {
    router.navigate(['/view/1']);
    tick(50);
    expect(location.path()).toBe('/view/1');
  }));
});