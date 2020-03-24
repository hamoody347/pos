import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { ThemeOptions } from '../../../theme-options';
import { select } from '@angular-redux/store';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router, RouterEvent, NavigationStart } from '@angular/router';
import { PosSidebarService } from './pos-sidebar.service';

@Component({
  selector: 'app-pos-sidebar',
  templateUrl: './pos-sidebar.component.html',
  styleUrls: ['./pos-sidebar.component.css']
})
export class PosSidebarComponent implements OnInit {
  home = false;
  shiftStatus: boolean;
  currentCategory: any;

  public subParam: any;
  public extraParameter: any;
  private innerWidth: number;
  private newInnerWidth: number;

  categories = [
    {
      categoryName: 'Wearables', categoryId: 'wearables',
      subCategories: [
        { name: 'Shirts', category: 'shirts' },
        { name: 'Balls', category: 'balls' },
        { name: 'Shoes', category: 'shoes' },
      ]
    },
    {
      categoryName: 'Food', categoryId: 'food',
      subCategories: [
        { name: 'Vegetables', category: 'vegetables' },
        { name: 'Poultary', category: 'poultary' },
        { name: 'Frozen Food', category: 'frozenFood' },
        { name: 'Diary Products', category: 'diaryProducts' },
      ]
    },
  ];


  constructor(
    private router: Router,
    public globals: ThemeOptions,
    private myService: PosSidebarService,
    private activatedRoute: ActivatedRoute,
  ) { }

  @select('config') public config$: Observable<any>;



  ngOnInit() {
    this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
    this.subParam = this.activatedRoute.snapshot.firstChild.data.subParam;
    this.navBarController();

    this.router.events.pipe().subscribe(() => {
      this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;
      this.subParam = this.activatedRoute.snapshot.firstChild.data.subParam;
      // console.log(this.activatedRoute.firstChild);
      this.navBarController();
    });

    this.categoryChange('all');

    this.myService.shift.subscribe(status => {
      if (status === 'true') {
        this.shiftStatus = true;
      } else if (status === 'false') {
        this.shiftStatus = false;
      }
      console.log(this.shiftStatus);
    });
  }

  categoryChange(category: string) {
    this.myService.changeCategory(category);
  }

  highlightCategory(event) {
    if (this.currentCategory) {
      if (this.currentCategory.target !== event.target) {
        this.currentCategory.target.classList.remove('active-item');
        this.currentCategory = event;
      }
    } else {
      this.currentCategory = event;
    }
    if (!event.target.classList.contains('active-item')) {
      event.target.classList.add('active-item');
    } else if (event.target.classList.contains('active-item')) {
      event.target.classList.remove('active-item');
      this.categoryChange('all');
    }
  }

  navBarController() {
    if (this.subParam === '') {
      this.home = true;
    } else {
      this.home = false;
    }
  }

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }

}
