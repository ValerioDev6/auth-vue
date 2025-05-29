<script setup lang="ts">
import Avatar from '@/components/ui/avatar/Avatar.vue';
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue';
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue';
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/ui/breadcrumb/BreadcrumbItem.vue';
import BreadcrumbLink from '@/components/ui/breadcrumb/BreadcrumbLink.vue';
import BreadcrumbList from '@/components/ui/breadcrumb/BreadcrumbList.vue';
import BreadcrumbPage from '@/components/ui/breadcrumb/BreadcrumbPage.vue';
import BreadcrumbSeparator from '@/components/ui/breadcrumb/BreadcrumbSeparator.vue';
import Button from '@/components/ui/button/Button.vue';
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuGroup from '@/components/ui/dropdown-menu/DropdownMenuGroup.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/DropdownMenuSeparator.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import { Separator } from '@/components/ui/separator';
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue';
import SidebarProvider from '@/components/ui/sidebar/SidebarProvider.vue';
import SidebarTrigger from '@/components/ui/sidebar/SidebarTrigger.vue';
import SidebarComponent from '@/features/admin/components/SidebarComponent.vue';
import { useColorMode } from '@vueuse/core';
import { LogOut, Monitor, Moon, Settings, Sun, User } from 'lucide-vue-next';

// const description = 'A sidebar that collapses to icons.';
// const iframeHeight = '800px';
// const containerClass = 'w-full h-full';

// Color mode con VueUse
const colorMode = useColorMode();

const setColorMode = (mode: 'light' | 'dark' | 'auto') => {
  colorMode.value = mode;
};
// const isDark = useDark();

// const setTheme = (theme: 'light' | 'dark' | 'system') => {
//   if (theme === 'system') {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     isDark.value = mediaQuery.matches;
//   } else {
//     isDark.value = theme === 'dark';
//   }
// };
</script>

<template>
  <SidebarProvider>
    <SidebarComponent />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#"> Dashboard </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <!-- Right side actions -->
        <div class="flex items-center gap-2 px-4">
          <!-- Dark Mode Toggle -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon" class="h-9 w-9">
                <Sun
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-40">
              <DropdownMenuItem @click="setColorMode('light')" class="cursor-pointer">
                <Sun class="mr-2 h-4 w-4" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem @click="setColorMode('dark')" class="cursor-pointer">
                <Moon class="mr-2 h-4 w-4" />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem @click="setColorMode('auto')" class="cursor-pointer">
                <Monitor class="mr-2 h-4 w-4" />
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- User Menu -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                <Avatar class="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="@usuario" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-56" align="end">
              <DropdownMenuLabel class="font-normal">
                <div class="flex flex-col space-y-1">
                  <p class="text-sm font-medium leading-none">usuario@email.com</p>
                  <p class="text-xs leading-none text-muted-foreground">Usuario</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem class="cursor-pointer">
                  <User class="mr-2 h-4 w-4" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem class="cursor-pointer">
                  <Settings class="mr-2 h-4 w-4" />
                  Configuración
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem class="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut class="mr-2 h-4 w-4" />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
          <RouterView />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
