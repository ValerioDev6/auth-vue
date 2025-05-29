<!-- <template>
  <h3>Login View</h3>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('admin@gmail.com');
const password = ref('admin123');
</script>

<style scoped></style> -->

<template>
  <div class="space-y-6">
    <Card class="p-6">
      <CardHeader class="space-y-1 text-center">
        <CardTitle class="text-2xl">Iniciar Sesión</CardTitle>
        <CardDescription> Ingresa tu email y contraseña para acceder </CardDescription>
      </CardHeader>

      <CardContent>
        <Form @submit="onLogin" class="space-y-4">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  ref="emailInputref"
                  type="email"
                  placeholder="tu@email.com"
                  v-bind="componentField"
                  v-model="myForm.email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <input
                  class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  ref="passwordInputref"
                  type="password"
                  placeholder="••••••••"
                  v-bind="componentField"
                  v-model="myForm.password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button type="submit" class="w-full"> Iniciar Sesión </Button>
        </Form>
      </CardContent>

      <CardFooter class="justify-center">
        <p class="text-sm text-slate-600 dark:text-slate-400">
          ¿No tienes cuenta?
          <RouterLink to="/auth/register" class="text-blue-600 hover:underline font-medium">
            Regístrate
          </RouterLink>
        </p>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useNotification } from '@kyvg/vue3-notification';
import { reactive, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
// const router = useRoute();
const notification = useNotification();
const emailInputref = ref<HTMLInputElement | null>(null);
const passwordInputref = ref<HTMLInputElement | null>(null);
const authStore = useAuthStore();
const router = useRouter();

const myForm = reactive({
  email: '',
  password: '',
  remeberme: false,
});

// ✅ AHORA (BUENO)
const onLogin = async () => {
  if (myForm.email === '') {
    emailInputref.value?.focus();
    return;
  }
  if (myForm.password === '') {
    passwordInputref.value?.focus();
    return;
  }

  // Solo llega aquí si pasa las validaciones
  const ok = await authStore.login(myForm.email, myForm.password);
  if (ok) {
    // ✅ AÑADIR: Redirección al dashboard después del login exitoso
    notification.notify({
      title: 'Login exitoso ✅',
      text: 'Bienvenido de vuelta',
      type: 'success',
    });

    // Redirigir al dashboard
    router.push('/admin/dashboard');
    return;
  }

  // Si llegó aquí, el login falló
  notification.notify({
    title: 'Error de login ❌',
    text: 'Credenciales incorrectas',
    type: 'error',
  });
};
</script>
