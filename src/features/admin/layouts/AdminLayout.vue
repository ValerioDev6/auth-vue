<template>
  <aside
    :class="[
      'fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background transition-all duration-300',
      isExpanded ? 'w-64' : 'w-14',
    ]"
    @mouseenter="isExpanded = true"
    @mouseleave="isExpanded = false"
  >
    <nav class="flex flex-col items-center gap-4 px-2 py-4">
      <a
        href="#"
        class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground"
      >
        <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
        <span class="sr-only">Acme Inc</span>
      </a>

      <div v-for="item in menuItems" :key="item.id" class="w-full">
        <TooltipProvider v-if="!isExpanded">
          <Tooltip>
            <TooltipTrigger as-child>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <component :is="item.icon" class="h-5 w-5" />
                <span class="sr-only">{{ item.name }}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">{{ item.name }}</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div v-else class="w-full space-y-1">
          <a
            href="#"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground hover:bg-accent"
          >
            <component :is="item.icon" class="h-4 w-4" />
            {{ item.name }}
          </a>

          <div v-if="item.subitems" class="ml-6 space-y-1">
            <a
              v-for="subitem in item.subitems"
              :key="subitem.id"
              href="#"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-foreground hover:bg-accent"
            >
              <div class="h-2 w-2 rounded-full bg-muted-foreground"></div>
              {{ subitem.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
      <TooltipProvider v-if="!isExpanded">
        <Tooltip>
          <TooltipTrigger as-child>
            <a
              href="#"
              class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Settings class="h-5 w-5" />
              <span class="sr-only">Settings</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <a
        v-else
        href="#"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground hover:bg-accent w-full"
      >
        <Settings class="h-4 w-4" />
        Settings
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-vue-next';
import { ref } from 'vue';

const isExpanded = ref(false);

const menuItems = ref([
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: Home,
  },
  {
    id: 'orders',
    name: 'Orders',
    icon: ShoppingCart,
    subitems: [
      { id: 'all-orders', name: 'All Orders' },
      { id: 'pending', name: 'Pending' },
      { id: 'completed', name: 'Completed' },
    ],
  },
  {
    id: 'products',
    name: 'Products',
    icon: Package,
    subitems: [
      { id: 'all-products', name: 'All Products' },
      { id: 'categories', name: 'Categories' },
      { id: 'inventory', name: 'Inventory' },
    ],
  },
  {
    id: 'customers',
    name: 'Customers',
    icon: Users2,
    subitems: [
      { id: 'all-customers', name: 'All Customers' },
      { id: 'vip', name: 'VIP Customers' },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: LineChart,
  },
]);
</script>
