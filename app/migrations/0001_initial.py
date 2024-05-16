# Generated by Django 4.2.4 on 2023-11-24 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chats',
            fields=[
                ('id_chat', models.AutoField(primary_key=True, serialize=False)),
                ('titulo', models.CharField(max_length=150)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'chats',
            },
        ),
        migrations.CreateModel(
            name='Entrenamiento_Datos',
            fields=[
                ('id_datos', models.AutoField(primary_key=True, serialize=False)),
                ('datos', models.TextField()),
                ('fecha_entrenamiento', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'entrenamiento_datos',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('nombre', models.CharField(max_length=150)),
                ('email', models.EmailField(max_length=150, unique=True)),
                ('contraseña_actual', models.CharField(max_length=150)),
                ('premiun', models.BooleanField(default=False)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'usuario',
            },
        ),
        migrations.CreateModel(
            name='Conversacion',
            fields=[
                ('id_conversacion', models.AutoField(primary_key=True, serialize=False)),
                ('texto', models.TextField()),
                ('fecha_conversacion', models.DateTimeField(auto_now_add=True)),
                ('adjunto', models.FileField(upload_to='adjuntos/')),
                ('id_chat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.chats')),
            ],
            options={
                'db_table': 'conversacion',
            },
        ),
        migrations.CreateModel(
            name='Contraseña',
            fields=[
                ('id_contraseña', models.AutoField(primary_key=True, serialize=False)),
                ('contraseña', models.CharField(max_length=150)),
                ('fecha_actualizacion', models.DateTimeField(auto_now_add=True)),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.usuario')),
            ],
            options={
                'db_table': 'contraseña',
            },
        ),
        migrations.CreateModel(
            name='Compras',
            fields=[
                ('id_compra', models.AutoField(primary_key=True, serialize=False)),
                ('metodo_pago', models.CharField(max_length=150)),
                ('pago', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha_compra', models.DateTimeField(auto_now_add=True)),
                ('estado_compra', models.CharField(max_length=150)),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.usuario')),
            ],
            options={
                'db_table': 'compras',
            },
        ),
        migrations.AddField(
            model_name='chats',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.usuario'),
        ),
    ]
