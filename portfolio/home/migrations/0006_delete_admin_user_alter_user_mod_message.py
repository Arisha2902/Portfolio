# Generated by Django 5.1 on 2024-09-11 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_user_mod_delete_admin_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_mod',
            name='message',
            field=models.TextField(blank=True, null=True),
        ),
    ]