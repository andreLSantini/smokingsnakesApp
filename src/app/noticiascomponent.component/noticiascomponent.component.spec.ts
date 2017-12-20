import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoticiascomponentComponent } from './noticiascomponent.component';

describe('NoticiascomponentComponent', () => {
    let comp: NoticiascomponentComponent;
    let fixture: ComponentFixture<NoticiascomponentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ NoticiascomponentComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(NoticiascomponentComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});