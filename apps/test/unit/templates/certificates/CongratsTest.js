import React from 'react';
import {shallow} from 'enzyme';
import {expect} from '../../../util/reconfiguredChai';
import Congrats from '@cdo/apps/templates/certificates/Congrats';
import Certificate from '@cdo/apps/templates/certificates/Certificate';
import StudentsBeyondHoc from '@cdo/apps/templates/certificates/StudentsBeyondHoc';
import TeachersBeyondHoc from '@cdo/apps/templates/certificates/TeachersBeyondHoc';
import PetitionCallToAction from '@cdo/apps/templates/certificates/petition/PetitionCallToAction';

describe('Congrats', () => {
  const userTypes = ['signedOut', 'teacher', 'student'];

  userTypes.forEach(userType => {
    it(`renders a Certificate component for user type ${userType}`, () => {
      const wrapper = shallow(
        <Congrats
          completedTutorialType="other"
          userType={userType}
          language="en"
        />
      );
      expect(wrapper.find(Certificate).exists()).to.be.true;
    });

    it(`renders a StudentsBeyondHoc for user type ${userType}`, () => {
      const wrapper = shallow(
        <Congrats
          completedTutorialType="other"
          userType={userType}
          language="en"
        />
      );
      expect(wrapper.find(StudentsBeyondHoc).exists()).to.be.true;
    });

    it(`renders a PetitionCallToAction component with tutorial for user type ${userType}`, () => {
      const wrapper = shallow(
        <Congrats
          completedTutorialType="other"
          userType={userType}
          language="en"
          tutorial="coursea"
        />
      );
      expect(wrapper.find(PetitionCallToAction).exists()).to.be.true;
      expect(wrapper.find(PetitionCallToAction).props().tutorial).to.not.be
        .undefined;
    });
  });

  it('renders a TeachersBeyondHoc component, for teachers', () => {
    const wrapper = shallow(
      <Congrats
        completedTutorialType="other"
        userType="teacher"
        language="en"
      />
    );
    expect(wrapper.find(TeachersBeyondHoc).exists()).to.be.true;
  });

  it('renders a TeachersBeyondHoc component, for signed out', () => {
    const wrapper = shallow(
      <Congrats
        completedTutorialType="other"
        userType="signedOut"
        language="en"
      />
    );
    expect(wrapper.find(TeachersBeyondHoc).exists()).to.be.true;
  });

  it('does not render a TeachersBeyondHoc component, for students', () => {
    const wrapper = shallow(
      <Congrats
        completedTutorialType="other"
        userType="student"
        language="en"
      />
    );
    expect(wrapper.find(TeachersBeyondHoc).exists()).to.be.false;
  });
});
