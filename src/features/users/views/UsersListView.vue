<template>
  <Tabs default-value="all">
    <div class="flex items-center">
      <TabsList>
        <TabsTrigger value="all"> All </TabsTrigger>
      </TabsList>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm" class="h-7 gap-1">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Filter </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem checked> Active </DropdownMenuItem>
            <DropdownMenuItem>Draft</DropdownMenuItem>
            <DropdownMenuItem> Archived </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" class="h-7 gap-1">
          <File class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Export </span>
        </Button>
        <Button size="sm" class="h-7 gap-1">
          <PlusCircle class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Product </span>
        </Button>
      </div>
    </div>
    <TabsContent value="all">
      <Card>
        <CardHeader>
          <CardTitle class="text-lg">Products</CardTitle>
          <CardDescription class="text-sm">
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent class="overflow-x-auto">
          <Table class="min-w-full text-sm">
            <TableHeader>
              <TableRow>
                <TableHead class="hidden sm:table-cell w-[64px] px-2 py-1">
                  <span class="sr-only">Avatar</span>
                </TableHead>
                <TableHead class="px-2 py-1">Email</TableHead>
                <TableHead class="hidden md:table-cell px-2 py-1">Rol</TableHead>
                <TableHead class="hidden lg:table-cell px-2 py-1">Creado</TableHead>
                <TableHead class="px-2 py-1">
                  <span class="sr-only">Acciones</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="user in users" :key="user.id" class="h-10">
                <TableCell class="hidden sm:table-cell px-2 py-1">
                  <img
                    :src="
                      user.avatar ||
                      'https://m.media-amazon.com/images/M/MV5BMTQ4OTY2ODkwNl5BMl5BanBnXkFtZTgwMTE4ODMyOTE@._V1_.jpg'
                    "
                    alt="Avatar"
                    class="aspect-square rounded-md object-cover"
                    height="40"
                    width="40"
                  />
                </TableCell>
                <TableCell class="font-medium px-2 py-1">{{ user.email }}</TableCell>
                <TableCell class="hidden md:table-cell capitalize px-2 py-1">{{
                  user.roles?.name
                }}</TableCell>
                <TableCell class="hidden lg:table-cell px-2 py-1">{{
                  new Date(user.created_at).toLocaleString()
                }}</TableCell>
                <TableCell class="px-2 py-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal class="h-4 w-4" />
                        <span class="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Eliminar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div class="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import { CardFooter } from '@/components/ui/card';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardDescription from '@/components/ui/card/CardDescription.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/DropdownMenuSeparator.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import Table from '@/components/ui/table/Table.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableCell from '@/components/ui/table/TableCell.vue';
import TableHead from '@/components/ui/table/TableHead.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableRow from '@/components/ui/table/TableRow.vue';
import Tabs from '@/components/ui/tabs/Tabs.vue';
import TabsContent from '@/components/ui/tabs/TabsContent.vue';
import TabsList from '@/components/ui/tabs/TabsList.vue';
import TabsTrigger from '@/components/ui/tabs/TabsTrigger.vue';
import { File, ListFilter, MoreHorizontal, PlusCircle } from 'lucide-vue-next';
import { onMounted } from 'vue';
import { useUsers } from '../composables/users.composable';

const { fetchUsers, users } = useUsers();
// const { page } = usePagination();
// const queryClient = useQueryClient();

// // const { data: users = [] } = useQuery({
//   queryKey: ['users', { page: page }],
//   queryFn: () => fetchUsers(page.value),
// });

onMounted(() => {
  fetchUsers(1, 10);
});

// watchEffect(() => {
//   queryClient.prefetchQuery({
//     queryKey: ['users', { page: page.value + 1 }],
//     queryFn: () => fetchUsers(page.value + 1),
//   });
// });
</script>
