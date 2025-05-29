<template>
  <div class="space-y-6">
    <Card class="p-6">
      <CardHeader class="space-y-1 text-center">
        <CardTitle class="text-2xl">Crear Cuenta</CardTitle>
        <CardDescription>Completa los datos para registrarte</CardDescription>
      </CardHeader>
      <CardContent>
        <Form @submit="onRegister" class="space-y-4">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" v-bind="componentField" v-model="registerForm.email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" v-bind="componentField" v-model="registerForm.password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <!-- <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" v-bind="componentField" v-model="registerForm.confirmPassword" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField> -->

          <FormField v-slot="{ componentField }" name="roleId">
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Selecciona un rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">ADMIN</SelectItem>
                    <SelectItem value="2">USUARIO</SelectItem>
                    <SelectItem value="3">VENTAS</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button type="submit" class="w-full">Registrarse</Button>
        </Form>
      </CardContent>
      <CardFooter class="justify-center">
        <p class="text-sm text-slate-600 dark:text-slate-400">
          ¿Ya tienes cuenta?
          <!-- ✅ CORREGIDO: Ruta correcta al login -->
          <RouterLink to="/auth/login" class="text-blue-600 hover:underline font-medium"> Inicia sesión </RouterLink>
        </p>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNotification } from '@kyvg/vue3-notification';
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const router = useRouter();
const { notify } = useNotification();
const authStore = useAuthStore();

const registerForm = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  roleId: '',
});

const onRegister = async () => {
  // Validaciones
  if (!registerForm.email) {
    notify({
      title: 'Error',
      text: 'Por favor ingresa tu email',
      type: 'error',
    });
    return;
  }

  if (!registerForm.password) {
    notify({
      title: 'Error',
      text: 'Por favor ingresa tu contraseña',
      type: 'error',
    });
    return;
  }

  // if (registerForm.password !== registerForm.confirmPassword) {
  //   notify({
  //     title: 'Error',
  //     text: 'Las contraseñas no coinciden',
  //     type: 'error',
  //   });
  //   return;
  // }

  if (!registerForm.roleId) {
    notify({
      title: 'Error',
      text: 'Por favor selecciona un rol',
      type: 'error',
    });
    return;
  }

  try {
    // ✅ Llamar al authStore.register con los 3 parámetros
    const result = await authStore.register(registerForm.email, registerForm.password, registerForm.roleId);

    if (result && result.ok) {
      notify({
        title: 'Éxito ✅',
        text: 'Cuenta creada exitosamente',
        type: 'success',
      });

      setTimeout(() => {
        router.push('/auth/login');
      }, 1500);
    } else {
      notify({
        title: 'Error de registro',
        text: result?.message || 'No se pudo crear la cuenta',
        type: 'error',
      });
    }
  } catch (error) {
    notify({
      title: 'Error',
      text: `Ocurrió un error inesperado : ${error}`,
      type: 'error',
    });
  }
};
</script>
