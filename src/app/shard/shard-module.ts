import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from './nav-bar/nav-bar';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, NavBar, Sidebar],
  exports: [CommonModule, NavBar, Sidebar],
})
export class SharedModule {}
