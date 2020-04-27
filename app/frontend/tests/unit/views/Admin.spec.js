import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

import router from '@/router';
import Admin from '@/views/Admin.vue';

const localVue = createLocalVue();
localVue.use(router);
localVue.use(Vuetify);

describe('Admin.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Admin, {
      localVue,
      stubs: ['BaseSecure']
    });

    expect(wrapper.html()).toMatch('Admin');
    expect(wrapper.html()).toMatch('router-view');
  });
});
