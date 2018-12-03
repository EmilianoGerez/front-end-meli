import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';

describe('Component: Header - Search Form', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);

        component = fixture.componentInstance;
      });
  }));

  it('form invalid when empty', () => {
    // validar si al estar vacio el formulario es invalido
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('search field validity', () => {
    let errors = {};
    const searchTerm = component.searchForm.controls['searchTerm'];
    // validar si el campo es requerido
    errors = searchTerm.errors || {};
    expect(errors['required']).toBeTruthy();

    // validar si el campo es valido al ingresar un valor
    searchTerm.setValue('iphone');
    expect(component.searchForm.valid).toBeTruthy();
  });

  it(`should trigger the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  // FIXME: NO FUNCIONA :(
  // it(`should call the onSubmit when click on Search button`, async(() => {
  //   component.searchForm.controls['searchTerm'].setValue('iphone');
  //   expect(component.searchForm.valid).toBeTruthy();
  //   fixture.detectChanges();
  //   spyOn(component, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('#searchBtn')).nativeElement;
  //   el.click();
  //   fixture.detectChanges();

  //   expect(component.onSubmit).toHaveBeenCalled();
  // }));
});
