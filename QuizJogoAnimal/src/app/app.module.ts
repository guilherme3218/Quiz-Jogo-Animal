import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {QuestionsComponent} from './components/questions/questions.component';
import {StartQuizComponent} from './components/start-quiz/start-quiz.component';
import {ConditionComponent} from './components/condition/condition.component';
import {FinishQuizComponent} from './components/finish-quiz/finish-quiz.component';
import {CongratsComponent} from './components/congrats/congrats.component';
import {AddAnimalComponent} from './components/add-animal/add-animal.component';
import {AddConditionComponent} from './components/add-condition/add-condition.component';
import {FormsModule} from '@angular/forms';
import {CongratsHelpComponent} from './components/congrats-help/congrats-help.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    StartQuizComponent,
    ConditionComponent,
    FinishQuizComponent,
    CongratsComponent,
    AddAnimalComponent,
    AddConditionComponent,
    CongratsHelpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StartQuizComponent,
    ConditionComponent,
    FinishQuizComponent,
    CongratsComponent,
    AddAnimalComponent,
    AddConditionComponent,
    CongratsHelpComponent]
})
export class AppModule {
}
