<script setup lang="ts">
import Breadcrumb from '@/components/ui/breadcrumb/Breadcrumb.vue';
import BreadcrumbItem from '@/components/ui/breadcrumb/BreadcrumbItem.vue';
import BreadcrumbLink from '@/components/ui/breadcrumb/BreadcrumbLink.vue';
import BreadcrumbList from '@/components/ui/breadcrumb/BreadcrumbList.vue';
import BreadcrumbPage from '@/components/ui/breadcrumb/BreadcrumbPage.vue';
import BreadcrumbSeparator from '@/components/ui/breadcrumb/BreadcrumbSeparator.vue';
import SidebarInset from '@/components/ui/sidebar/SidebarInset.vue';
import SidebarProvider from '@/components/ui/sidebar/SidebarProvider.vue';
import SidebarTrigger from '@/components/ui/sidebar/SidebarTrigger.vue';
import SidebarComponent from '@/features/admin/components/SidebarComponent.vue';

// const description = 'A sidebar that collapses to icons.';
// const iframeHeight = '800px';
// const containerClass = 'w-full h-full';
</script>

<template>
  <SidebarProvider>
    <SidebarComponent />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
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
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <RouterView />
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
