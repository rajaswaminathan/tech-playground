# UsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


From the angular cli website there are instructions to create a new  project


## Module File:
	The declaration array will have all the components to be used  in the module
	
	The imports array will have the components that are used but not created by external parties
	
	bootstrap array will have the root component to be rendered for the module
	
	provider array will have all the services that can be injected in the components
	
## Component:
	Need to pass a javascript object to it. It will have a three attributes
	Value for Selector element will represent a tag in the index.html or in the component template file where the component will be rendered
	
	template value will  have the file that will be used by this component


## Bindings:
	Property bindings
		user [] brackets to set value for a specific html tag atttribute to the value in the component
		Example <button [disabled] = "Some value in the model"/>
	
	Action binding:
		user () brackets to bind action to a functio in the model
		example <button (click)="Somefunction"/>
	
	Two way binding:
		the combination of [] and () specificall in two was forms
		<input type="text" [(ngModel)]="prodName"/>
		
		To user two waybinding need to import FormsModule and set in the imports array in the module file

## Directives:
	*ngFor
	<div *ngFor="let product of products">{{product}}</div>
	Here products is an array in the component
	
	<  *ngIf="specify the condition here" >


The component appear to rerender when there is a changge in the values of the attributes in the component


## Passing values to components down:
	This very important. In the child component add a @Input() before the member variable declaration line this. This has to be imported from the @anular/core
	like this @Input() productName:String
	
	In the parent component pass the value like this
	<app-product [productName]="the value you need to pass. I can be a variable in the parent component"></app-product>
	
## Invoking action in the parent from the child component:
	Use @Output decotator as below
	@Output() productClicked = new EventEmitter();
	
	onClickOrAction(){	
		this.productClicked.emit();
	}
	
	In the parent capture the event like this
		<app-product (productClicked)="do whatever">

Read about angular forms:
