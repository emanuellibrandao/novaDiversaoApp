import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrooklynNineNinePage } from './brooklyn-nine-nine.page';

describe('BrooklynNineNinePage', () => {
  let component: BrooklynNineNinePage;
  let fixture: ComponentFixture<BrooklynNineNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrooklynNineNinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrooklynNineNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
