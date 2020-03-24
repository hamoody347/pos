import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startIntro() {
    // this.introMethod();
  }


  // Intro method to be called
  // introMethod() {
  //   // import IntroJS
  //   const IntroJs = require('../../../../../node_modules/intro.js/intro');
  //   const intro = IntroJs();
  //   console.log('inside intro.js');
  //   intro.setOptions({
  //     steps: [
  //       {
  //         intro: 'Ahlan wa Sahlan',
  //       },
  //       {
  //         element: '#step1',
  //         intro:
  //           // tslint:disable-next-line:max-line-length
  //           'When you are slaves on Earth, and  you are told: ‘Renounce Earthly freedom, for in Heaven awaits you unimaginable freedom.’ Answer back: \'He who did not taste freedom on Earth, will not know it in Heaven!’',
  //         position: 'right'
  //       },
  //       {
  //         element: '#step2',
  //         intro:
  //           'Enter Your Password Again Here',
  //         position: 'bottom'
  //       }
  //     ],
  //     showProgress: true,
  //     skipLabel: 'Skip',
  //     doneLabel: 'Done',
  //     nextLabel: 'Next',
  //     prevLabel: 'Back',
  //     overlayOpacity: '0.8'
  //   });
  //   intro.start();
  // }


}





