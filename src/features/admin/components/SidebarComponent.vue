<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';
import Sidebar from '@/components/ui/sidebar/Sidebar.vue';
import SidebarContent from '@/components/ui/sidebar/SidebarContent.vue';
import SidebarFooter from '@/components/ui/sidebar/SidebarFooter.vue';
import SidebarHeader from '@/components/ui/sidebar/SidebarHeader.vue';

import { AudioWaveform, Command, GalleryVerticalEnd, UserIcon } from 'lucide-vue-next';
import NavMain from './NavMain.vue';
import NavUser from './NavUser.vue';
import TeamSwitcher from './TeamSwitcher.vue';

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
});

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Usuarios',
      url: '#',
      icon: UserIcon,
      isActive: true,
      items: [
        {
          title: 'listado',
          url: '/admin/usuarios/listado',
        },
        {
          title: 'crear',
          url: '#',
        },
        {
          title: 'buscar',
          url: '#',
        },
      ],
    },

    {
      title: 'Dashboard',
      url: '/',
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
