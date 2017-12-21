import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TimesComponent } from './times.component';

describe('TimesComponent', () => {
    let comp: TimesComponent;
    let fixture: ComponentFixture<TimesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TimesComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(TimesComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});